# Custom Stack to Build Universal React App

## Live Website
https://katalo9.herokuapp.com/

Because this website using free heroku hosting, if something unexpected happened please contact me.

### Available Routes
    1. Catalogue Hompage -> https://katalo9.herokuapp.com/
    2. Product Detail -> https://katalo9.herokuapp.com/detail-product-1
    3. Not Found -> https://katalo9.herokuapp.com/asdfsdf

## Requirements
Use the latest Node and NPM version.

1. Node 14
2. NPM 6.14.4

## How to run
Before following this guide, please install all the dependencies first by running `npm i`.

### Development Mode
1. NPM run dev
2. Wait for webpack finish compiling
3. Navigate to `localhost`, by default server running on port 80
4. Don't exit the terminal, because it watching file changes and recompile it

Due to this stack does not yet implement `Hot Reload`, so if you finish editing any files, please do refresh the browser.

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
- Custom CSS Framework
- On Demand changes SSR or CSR or use Both

## Layout Breakpoints
1. \>= 992px Desktop
2. <= 991px Mobile

## Universal App
This project able to render pages on **server** / **client**, please see following examples.

By default all component `without` dynamic data will be server rendered.

To prevent component with static data rendered on the server, we can use this technique.

  ``` 
    // in Class Component
    render () {
        <>
        {
            this.state.didMount && <div> Hello </div>
        }
        <OutSideComponent > // This will rendered on server side
        </>
    }

    // in Function Component
    return (
        </>
        {
            didMount && <div> Hello </div>
        }
        <OutSideComponent > // This will rendered on server side
        <>
    )

    // If we extract the hello component above into a separate component, then we can use this technique.
    const HelloComponent = loadable(() => import('./HelloComponent'), { ssr: false });
  ```

By default all component `with` dynamic data will be client side rendered.

So if we want to make it server rendered, we need to fetch data in server too, then save the data on global store.

```

// In every page there is a function called load data. This function will get data on the server and store it on global store
const loadData = (store) => {
    return store.dispatch(getPopularProducts({})); //Load data popular product on the server
};

```

Thank You.
