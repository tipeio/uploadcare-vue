<p align="center">
  <a href="https://tipe.io/" target="_blank">
    <img  alt="Tipe" src="https://user-images.githubusercontent.com/1016365/30999155-30430eb8-a488-11e7-850e-a7c38dad77c1.png" class="img-responsive">
  </a>
</p>

___

# Uploadcare Vue

<a href="https://uploadcare.com/?utm_source=tipe&utm_campaign=tipe-oss">
  <img align="left" width="64" height="64"
       src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
       alt="">
</a>

Uploadcare Vue is an HTML5 file uploader
which itself is a part of [Uploadcare](https://uploadcare.com/?utm_source=tipe&utm_campaign=tipe-oss)
ecosystem.

It’s provided as a typical JavaScript library and can be easily embedded in your site.

The widget is highly customizable to fit your needs.
It supports multi-file uploads, manual crop, integrations with social networks and cloud storage providers.

<a href="https://uploadcare.com/widget/configure/?utm_source=tipe&utm_campaign=tipe-oss" title="Play with Widget">
  <img src="https://ucarecdn.com/021e5297-c1c4-43d4-97fc-6de7dd97c856/"
       width="888" alt="Widget in action">
</a>

## Docs

See the complete docs on using Uploadcare Widget [here](https://uploadcare.com/documentation/widget/?utm_source=tipe&utm_campaign=tipe-oss).  See the [usage](#usage) section for component props.

## Types of bundles

There's a few types of js bundles:

* `uploadcare.full.js` — a full bundle with built-in jQuery,
* `uploadcare.js` — a bundle without built-in jQuery,
* `uploadcare.api.js` — a bundle without UI of the widget and built-in jQuery,
  [JavaScript API](https://uploadcare.com/documentation/javascript_api/?utm_source=tipe&utm_campaign=tipe-oss) only,
* `uploadcare.ie8.js` — a full bundle with built-in jQuery 1.x for IE 8 support (widget v. 2.x and below),
* `uploadcare.lang.en.js` — a bundle without built-in jQuery, `en` locale only.

Each bundle has its minified version. Just add `.min` before `.js`, e.g. `uploadcare.min.js`.

By default, `uploadcare.min.js` is exported for npm and other package managers.

## Install

You’re free to choose from the install methods listed below.

### NPM

```bash
npm install uploadcare-vue --save
```

```javascript
import Uploadcare from 'uploadcare-vue'
```

### Other install methods

The official Uploadcare Widget [documentation](https://uploadcare.com/documentation/widget/?utm_source=tipe&utm_campaign=tipe-oss#install)
has more install methods.

## Usage

Once you’re done with the install, there are
two simple steps to take to actually use the widget.

**Set your [public key](https://uploadcare.com/documentation/widget/?utm_source=tipe&utm_campaign=tipe-oss#option-public-key)**.

Your secret key is not required for the widget

**Insert widget element** and `uploadcare` component will listen to any click event

```html
<uploadcare :publicKey="YOUR_PUBLIC_KEY" @success="onSuccess" @error="onError">
  <button>New Asset</button>
</uploadcare>
```

### Component Props
Internally, the component uses the [Open Dialog API](https://uploadcare.com/docs/api_reference/javascript/dialog_panel/) and uses the props as options.  All of the options on the [Widget Configuration](https://uploadcare.com/docs/uploads/widget/config/) page are supported as props.

## Configuration

The widget is highly customizable through widget options.
All configuration options together with ways to set them are
described in [our docs](https://uploadcare.com/documentation/widget/?utm_source=tipe&utm_campaign=tipe-oss#configuration).

## JavaScript API

You might not want to use all the features that
[our widget](https://uploadcare.com/documentation/widget/?utm_source=tipe&utm_campaign=tipe-oss) exhibits.
Or, perhaps, you might want to redesign the user experience
without having to reinvent the wheel.
Maybe, you're in pursuit of building a UI on top of the widget.
For all of those use cases, we provide a
[JavaScript API](https://uploadcare.com/documentation/javascript_api/?utm_source=tipe&utm_campaign=tipe-oss).
Feel free to control the default widget with it,
or make use of its standalone components that
can be combined with your own solutions.

## Localization

It’s possible that your locale is not available in the widget yet.
If that’s the case, contributing your locale might be a good idea.
This can be done by forking the [main repository](https://github.com/uploadcare/uploadcare-widget?utm_source=tipe&utm_campaign=tipe-oss)
and adding a localization file
[here](https://github.com/uploadcare/uploadcare-widget/tree/master/app/assets/javascripts/uploadcare/locale?utm_source=tipe&utm_campaign=tipe-oss).

## Browser Support

Our widget should work perfectly in a couple of the latest versions
of major desktop browsers: Internet Explorer, Edge, Firefox, Google Chrome,
Safari, and Opera. It is most likely to run well in older versions
of major browser too, except for Internet Explorer < 10.

If you need to support of old browsers and IE8 too, you might use [v2 of widget][v2ie8].

[v2ie8]: https://uploadcare.com/documentation/widget/v2/?utm_source=tipe&utm_campaign=tipe-oss#ie8

<div>
  <table>
    <thead>
      <tr>
        <th>Desktop</th>
        <th>Mobile</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chrome: 37+</td>
        <td>Android Browser: 4.4+</td>
      </tr>
      <tr>
        <td>Firefox: 32+</td>
        <td>Opera Mobile: 8+</td>
      </tr>
      <tr>
        <td>Safari: 9+</td>
        <td>iOS Safari: 9+</td>
      </tr>
      <tr>
        <td>Edge: 12+</td>
        <td>IE Mobile: 11+</td>
      </tr>
      <tr>
        <td>IE: 10+</td>
        <td>Opera Mini: Last</td>
      </tr>
    </tbody>
  </table>
</div>

## Development

Check out the Uploadcare Widget development guide
[here](https://github.com/uploadcare/uploadcare-widget/blob/master/DEVELOPMENT.md).

## Contributors
- [Tipe](https://github.com/tipeio)
- [PatrickJS](https://github.com/gdi2290)
