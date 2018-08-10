==========================================
LOCAL REFERENCES
==========================================
#<referencename>: can be put on any html element and references the entire element
 *can he used anywhere else in the template without '#'
 *use with @ViewChild('refName') in front of property with type ElementRef;
        use element name .nativeElement.value to dig out value.




BUILDING DIRECTIVES -- SEE BUILTIN DIRECTIVES COMPONENT FOR EXAMPLES
-attribute directives -- modify the DOM
-structural directives -- add/remove elements from DOM
<!-- BUILTIN STRUCTURAL DIRECTIVES *ngFor *ngIf -- WHICH ADD/REMOVE ELEMENTS FROM DOM -->
<!-- BUILT IN ATTRIBUTE DIRECTIVES [ngClass] [ngStyle] -- WHICH MANIPULATE/MODIFY THE DOM -->
<!-- BUILT IN ATTRIBUTE DIRECTIVES [ngClass] [ngStyle] -- WHICH MANIPULATE/MODIFY THE DOM -->
<!-- EXAMPLE SHOWS ADDING CLASS OR STYLE ONLY IF A CONDITION IS TRUE -->


CREATING CUSTOM DIRECTIVES --> 'directives' directory
custom-directive: shows basic way using ElementRef
        *directly accesses the dom
better-directive: better example using methods of  Renderer2 object w/methods to       modify the DOM similar to javascript
        *this is better in case angular is not running in browser and does not have access to the DOM
        *Renderer2 is Rendererv2 in legacy versions

EVENT DRIVEN DOM MANIPULATIONS --> uses @HostListener('<DOM Event>') decorator added to a method which performs the modification using the Renderer2/ElementRed

event-driven-driective: wraps the renderer object in a method that takes event param, then decorates method with @HostListener('Dom Event to listen for')

@HostBinding('<DomProperty>') decorates a user defined property to a DomProperty. user defined property can then be set to desired value. 
    *used instead of renderer object to access and set properties. 
    *if using events to set the property value, specify an initial value when declaring the user-defined property.

DYNAMICALLY SETTING DIRECTIVE PROPERTIES -->  
dynamic-binding-directive: can use property binding along with the directive in html elements to bind to properties in the directive.


SYNTAX:
**binds to method
@HostListener('DomEvent') propertyname(eventData:Event) { code to run when triggered};

**binds to property
@HostBinding('Dom Propery') propertyname = value;

DOM EVENTS
abort
beforeinput
blur
click
compositionend
compositionstart
compositionupdate
dblclick
error
focus
focusin
focusout
input
keydown
keypress
keyup
load
mousedown
mouseenter
mouseleave
mousemove
mouseout
mouseover
mouseup
resize
scroll
select
unload
wheel

STRUCTURAL DIRECTIVES: ADD/REMOVE DOM ELEMENTS
        *uses ViewContainerRef and TemplateRef (the reference to <ng-template>)
        *create a setter property and decorate with @Input() and inside method use a VCRef method and pass in the Template ref object.
        *struct dirctives live in <ng-template>; shorthand is using '*' before the dir name.

        SX: @Input set appSelectorName(condition: bool) {
                if(condition) {
                        this.vcRef.CreateEmbeddedView(this.templateRef)
                }
        }
        ctor(private template: TemplateRef<any>, private ViewContainerRef)


===================================================
SERVICES and DEPENDENCY INJECTOR
====================================================
Service 
