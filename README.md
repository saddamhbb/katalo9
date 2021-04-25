# Custom Stack to Build Universal React App

## Requirements
Use the latest Node and NPM version.

1. Node 14
2. NPM 6.14.4

## How to run
Before following the guide, please install the dependencies first by running `npm i`.

### Development Mode
1. NPM run dev
2. Wait for webpack finish compiling
3. Navigate to `localhost`, by default server running on port 80
4. Dont exit the terminal, because its watching file changes and recompile it

Due to this stack not yet implemet Hot Reload, so if you finish editing any files, please do refresh the browser.

### Production Mode
1. NPM run build-prod
2. Wait for webpack finish compiling
3. NPM run prod
4. Navigate to `localhost`, by default server running on port 80

Due to this is a production mode, no watcher is running for file changes. So if you change any files in this production mode, you will need to re run `NPM run build-prod && NPM run prod`.

### Output Folder
1. `Build` folder for Development 
2. `Dist` folder for Production

## Features
- Code Splitting using Loadable Components (JS and CSS)
- Support SCSS 
- Support Compression to gzip or brotli for production build
- API using JSON Server. Please navigate to this URL: https://katalo9-api.herokuapp.com

## Layout Breakpoints
1. \>= 992px Desktop
2. <= 991px Mobile

## Universal App
This project able to render pages on **server** / **client**, please see following examples.

  ``` 
    // in Class Component
    render () {
        <>
        {
            this.state.didMount && <YourComponent />
        }
        <OutSideComponent > // This will rendered on server side
        </>
    }

    // in Function Component
    return (
        </>
        {
            didMount && <YourComponent />
        }
        <OutSideComponent > // This will rendered on server side
        <>
    )
  ```
