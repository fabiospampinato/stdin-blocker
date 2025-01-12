# Stdin Blocker

A tiny library for blocking stdin keypresses, except for Ctrl+C. Useful while displaying animations.

## Install

```sh
npm install stdin-blocker
```

## Usage

```ts
import Blocker from 'stdin-blocker';

Blocker.isBlocked (); // => false, stdin input is not blocked

Blocker.block ();

Blocker.isBlocked (); // => true, stdin input is blocked

Blocker.unblock ();

Blocker.isBlocked (); // => false, stdin input is not blocked

Blocker.toggle ();

Blocker.isBlocked (); // => true, stdin input is blocked
```

## License

MIT © Fabio Spampinato
