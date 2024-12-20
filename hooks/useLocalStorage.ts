/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import { isBrowser, noop } from "@/lib/react-use";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

type parserOptions<T> =
    | {
          raw: true;
      }
    | {
          raw: false;
          serializer: (value: T) => string;
          deserializer: (value: string) => T;
      };

const useLocalStorage = <T>(
    key: string,
    initialValue?: T,
    options?: parserOptions<T>,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
    if (!isBrowser) {
        return [initialValue as T, noop, noop];
    }
    if (!key) {
        throw new Error("useLocalStorage key may not be falsy");
    }

    const deserializer = options
        ? options.raw
            ? (value: never) => value
            : //@ts-ignore
              options.deserializer
        : JSON.parse;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const initializer = useRef((key: string) => {
        try {
            //@ts-ignore
            const serializer = options
                ? options.raw
                    ? String
                    : options.serializer
                : JSON.stringify;

            const localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            } else {
                //@ts-ignore
                initialValue &&
                    localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        } catch {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState<T | undefined>(() =>
        initializer.current(key),
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => setState(initializer.current(key)), [key]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
        (valOrFunc) => {
            try {
                const newState =
                    typeof valOrFunc === "function"
                        ? (valOrFunc as Function)(state)
                        : valOrFunc;
                if (typeof newState === "undefined") return;
                let value: string;

                if (options)
                    if (options.raw)
                        if (typeof newState === "string") value = newState;
                        else value = JSON.stringify(newState);
                    //@ts-ignore
                    else if (options.serializer)
                        value = options.serializer(newState);
                    else value = JSON.stringify(newState);
                else value = JSON.stringify(newState);

                localStorage.setItem(key, value);
                setState(deserializer(value));
            } catch {
                // If user is in private mode or has storage restriction
                // localStorage can throw. Also JSON.stringify can throw.
            }
        },
        [key, setState],
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const remove = useCallback(() => {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        } catch {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);

    return [state, set, remove];
};

export default useLocalStorage;
