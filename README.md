# cdn-injector

## Summary
This `html-javascript` file combo is a component of the devhut.solutions devBox, a
**Graphical Development Environment for  Web Developers**.  Current Graphical IDE's tend to
primarily focus on creating creation environments for non-developers, ie. those with 
coding aversions.

The devBox project, on the other hand, is intended to use the advantages of Graphical IDE's
in tandem with the developers perferred IDE/text editor.

## Usage
The Injector.js Constructor Function can be used without the index.html. The process would then
entail:
1.  Add the following snippet to your html entry file: 
   ```
    <div id="formdiv"></div>
		<script type="module">
			import Injector from './Injector.js';
			var injector = new Injector();
		</script>
   ```
   Or if you prefer, your ES6 loder module:
   ```

   ```
   