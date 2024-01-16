# create-hash

This is a simple proof of concept for creating a quick command-line package. This was created to just quickly hash and/or salt a provided password.

## Usage

```bash
> create-hash <password>
Do you want a salted password? (Y/n):
```

Example

```bash
> create-hash password123
Do you want a salted password? (Y/n): y
cLiftCm4dawK9FNzOm17yw==:b2zJ8DwtOUD2W+Dhod0tb0/8hUO8VlRNuOLbpHwC1Q75gwLzwhT/4mPswQMG8bZ2UZx2gO6ozsn/Tz1mW2ynJg==
```

For this package to work properly it will need to be published or symlinked (meaning running `npm link` in the package directory).

## Acknowledgements

Thank you to [this project](https://github.com/danilovilhena/kickstart-it) for the inspiration and [this article](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e) for the explanation.
