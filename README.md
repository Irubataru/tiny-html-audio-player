tiny-html-audio-player
======================

A tiny and clean audio player for the web.
[See it in action](https://irubataru.com/tiny-html-audio-player/).

## Usage

The plugin parses your HTML looking for `audio` tags and replaces them with tiny
audio players. Although there are multiple audio-players, they are managed by a
global object so that only one will be playing at a time, and the volume sliders
are linked.

### Specifying titles through HTML tags

Giving the `audio` a `data-title=""` has the highest precedence title for your
track.

_Example_:

To add a song with the title "80s Vibe":

```html
<audio controls class="iru-tiny-player" data-title="80s Vibe">
  <source src="audio/80s_vibe.mp3" type="audio/mpeg">
</audio>``html
```
### Inducing titles from headers

If no `data-title` is specified, the plugin will search
for the nearest header in the same block before the previous
`<audio>` tag.

_Example_:

The following player will have the title "first bird".

```html
<h2>Stephan Siebert - first bird</h2>
<p>This song is dedicated to my very special friend...</p>
<audio controls class="iru-tiny-player">
  <source src="audio/first_bird.mp3" type="audio/mpeg">
</audio>
```

## License

MIT
