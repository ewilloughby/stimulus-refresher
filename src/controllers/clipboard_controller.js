import { Controller } from "@hotwired/stimulus"

/*
When Stimulus loads your controller class, it looks for target 
name strings in a static array called targets. For each target name
 in the array, Stimulus adds three new properties to your controller. 
 Here, our "source" target name becomes the following properties:

this.sourceTarget evaluates to the first source target in your controller’s scope. If there is no source target, accessing the property throws an error.
this.sourceTargets evaluates to an array of all source targets in the controller’s scope.
this.hasSourceTarget evaluates to true if there is a source target or false if not.

*/

export default class extends Controller {
    static targets = [ "source" ]
    static classes = [ "supported" ]
    connect() {
        if ("clipboard" in navigator) {
          this.element.classList.add(this.supportedClass);
        }
    }
    copy() {
        event.preventDefault()
        navigator.clipboard.writeText(this.sourceTarget.value)
    }
}