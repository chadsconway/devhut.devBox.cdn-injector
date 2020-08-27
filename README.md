# cdn-injector

## Summary
> Concept: This `html-javascript` file combo is the initial development project for a component of a concept project I'm working on.
Right now the project is called devBox, whose description might be
**Graphical Development Environment for  Web Developers**.  
> Premise: Current Graphical IDE's tend to
primarily focus on creating creation environments for non-developers, ie. those with 
coding aversions.
> End Goal: The devBox project, on the other hand, is intended to use the advantages of Graphical IDE's
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
  import Injector from './Injector.js';
  let formdiv = document.createElement('div');
  // this div will be automatically removed after selecting cdn links to inject
  if (document.body) {
    document.body.appendChild(formdiv);
  }
  let injector = new Injector();
  ```
2. Bring up index.html, or your html entry file with the snippet added, and you are presented with a list of checkboxes.  By checking the cdns you would like to inject, and clicking submit, the cdns are injected into your html doc and the form div is removed.

> Plans:  Planning to maybe integrate something like this with jsdeliver or other cdn provider, depending on...
