# About

Download files from the browser.

**Runs only on browsers.**

Written in Typescript, runs everywhere.

# Import

`npm install dyna-client-down-load`

**Note:** The npm package name is `dyna-client-down-load` and *not* `dyna-client-download` due to an npm restriction.

# Use cases

- Build some data on browser (csv, etc..) and download them without need of server.
- Export data from client for debugging purposes.

# Methods

## dynaClientDownloadText = (filename: string, text: string): void

Downloads a file with text content.

## dynaClientDownloadObject = (filename: string, data: any, compressed: boolean = false): void

Downloads a file with json format with the data of the `data` object.

Note: that the object should be able to be stringified.

The `dynaClientDownloadObject` method, adds the `.json` extension if needed.

# Examples

```
dynaClientDownloadText("hello.txt", "Hello world!");
dynaClientDownloadObject("hello", {message: "Hello world!"});
```