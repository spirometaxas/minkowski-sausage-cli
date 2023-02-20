# minkowski-sausage-cli
Print the [Minkowski Sausage](https://en.wikipedia.org/wiki/Minkowski_sausage) to the console!

![What minkowski-sausage-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/minkowski-sausage-cli/main/img/minkowski-sausage-banner.png)

[![npm version](https://img.shields.io/npm/v/minkowski-sausage-cli)](https://www.npmjs.com/package/minkowski-sausage-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/minkowski-sausage-cli)](https://bundlephobia.com/package/minkowski-sausage-cli)
[![downloads](https://img.shields.io/npm/dy/minkowski-sausage-cli)](https://www.npmjs.com/package/minkowski-sausage-cli)
[![license](https://img.shields.io/npm/l/minkowski-sausage-cli)](https://github.com/spirometaxas/minkowski-sausage-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx minkowski-sausage-cli <n>
$ npx minkowski-sausage-cli <n> [options]
```
where `n >= 0`.

### Via Global Install
```
$ npm install --global minkowski-sausage-cli
$ minkowski-sausage-cli <n>
$ minkowski-sausage-cli <n> [options]
```
where `n >= 0`.

### Via Import
```
$ npm install minkowski-sausage-cli
```
then:
```
const minkowski = require('minkowski-sausage-cli');
console.log(minkowski.create(<n>);
console.log(minkowski.create(<n>, { 
    inverse: <boolean>,
    rotation: <left|right|flip|standard>,
    line: <bold|double|standard> 
});
```
The config params are optional. 

## Options
### Recursive Step  
```
$ minkowski-sausage-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ minkowski-sausage-cli 2
```
![What minkowski-sausage-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/minkowski-sausage-cli/main/img/minkowski-sausage-2.png)

```
$ minkowski-sausage-cli 3
```
![What minkowski-sausage-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/minkowski-sausage-cli/main/img/minkowski-sausage-3.png)

### Inverse
```
$ minkowski-sausage-cli <n> --inverse
```
The optional `--inverse` param (or shorthand `-i`) will draw the inverse Minkowski Sausage.  

#### Example:
```
$ minkowski-sausage-cli 3 --inverse
```
![What minkowski-sausage-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/minkowski-sausage-cli/main/img/minkowski-sausage-3-inverse.png)

### Rotation
```
$ minkowski-sausage-cli <n> --rotate=<left|right|flip|standard>
```
The optional `--rotate` param rotates the Minkowski Sausage.  Supported values:

- `left`: Rotate left 90 degrees
- `right`: Rotate right 90 degrees
- `flip`: Rotate 180 degrees
- `standard`: No rotation (default)

#### Example:
```
$ minkowski-sausage-cli 3 --rotate=left
```
![What minkowski-sausage-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/minkowski-sausage-cli/main/img/minkowski-sausage-3-rotate_left.png)

Note: `left` and `right` rotations look identical.  `flip` and `standard` rotations also look identical.  

### Line Type
```
$ minkowski-sausage-cli <n> --line=<bold|double|standard>
```
The optional `--line` param draws the Minkowski Sausage using different line types.  Supported values:

- `bold`: Draw using bold lines
- `double`: Draw using double lines
- `standard`: Draw using standard lines (default)

#### Examples:
```
$ minkowski-sausage-cli 3 --line=bold
```
![What minkowski-sausage-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/minkowski-sausage-cli/main/img/minkowski-sausage-3-line_bold.png)

```
$ minkowski-sausage-cli 3 --line=double
```
![What minkowski-sausage-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/minkowski-sausage-cli/main/img/minkowski-sausage-3-line_double.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/minkowski-sausage-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)