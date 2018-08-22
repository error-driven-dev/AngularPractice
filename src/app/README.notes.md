D: directive
I: interface; import and implement in class def
S: service; register as 'provider', import into class, pass in ctor as private property
H: Html
SX: Syntax
N: scoped note
*: general note
O: object/datatype; import from module for access  


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
        *import Directive, ElementRef, Renderer2, HostListener from core -- and inject Elref and renderer as private properties in ctor

@HostBinding('<DomProperty>') decorates a user defined property to a DomProperty. user defined property can then be set to desired value. Attaches or detached the property

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
*Service is defined as exported class and can hold private data and CRUD methods
*Service is passed into constructor (with private) of consumer component as a private param AND as 'providers' array to @Component decorator.
*Services are made available to all children through 'providers' array; thus app-wide 
  services, add to module file's provider and just inject thru ctor on all others
        --Alternative to adding to module file, decorate service with:
        @Injectible({providedIn: 'root'})

LISTEN AND SUBSCRIBE TO SERVICES:
   *Data should not be directly accessible to components, use service's methods for access 
   *Retrival should return a copy of ref type, not the exact ref type. Then use EventEmitter as a change tracker/push notification.
   *PUSH NOTIFICATIONS:Data in service can be emitted to any component that subscribes to it.
        In Service: Add EventEmitter to an event, add an emit when method is called that adds/pushes to collection
        In Producer Component: inject service then use it to call add method
        In Consumer Component: inject service then use to call .subscribe method and pass in lambda .subscribe((datareceived => this.property = datareceived));
        

  

BUILDING DIRECTIVES
-attribute directives -- modify the DOM
-structural directives -- add/remove elements from DOM

=============================
ROUTING
==================================
*Config to use routes in app: register routes in app.module file (outside of class) or refactor into own file app-routing.module -- decorate class with @NgModule({ imports:[RouterModule.forRoot(appRoutes)], exports:[RouterModule]})  and add the class name to the app.module imports: array
*Absolute path prefixed with '/', Relative path is without
DYNAMMICALLY CONSTRUCTING ROUTES IN ANCHOR TAGS
D: routerLink="/slug" : added to elem (anchor) tag, intercepts default behavior http call (as when using href). Appends route to current route, thus relative path is appended to current
    *PROPERTIES OF RouterLink DIRECTIVE:
        [queryParams]="{key:value}" : adds ?name=value in url
        fragment="<someword>"  --> will show with #someword in url
D: routerLinkActive="<cssclass>" : adds class when route selected; may need to add to container of anchor tag like <li>
D: [routerLinkActiveOptions]="{exact = true}" : to match entire path, not just pieces
S: ActivatedRoute (@anular/router) : accesses metadata; route context

REGISTERING ROUTES:
$import Routes, RouterModule from @angular/Router; imports: RouterModule.forRoot(appRoutes)
$H: <router-outlet> : marks place where component is loaded according to selected route.

$anchor tag helpers(directives): 
    routerLink="/users" or [routerLInk] = "['/users', '2ndsegment','']"
    [queryParams]="{key:value}"  --> will show with ?name=value in url
    
    
SX: const appRoutes: Routes = [
        {path:'users', component: <componentname>},
        {path:'', component: <homecomponent>},
        {path:'users/:id', component: <componentname>},
        {path:'users/:id/edit', component: <componentname>},
        {path:'**', redirectTo: '/not-found', pathMatch: 'full'}
    ]

PROGRAMATTIC ROUTING -- TRIGGER NAVIGATION FROM CODE (eg from a method or after and operation; from a click listener)
S: ActivatedRoute (@anular/router) : access current route metadata/context within code
S: Router(@angular/router) : methods to .navigate to new path
        
        SX: this.router.navigate(['path'], {relativeTo: this.activatedRoute}, {queryParams: {key:value}, fragment:"somfragment"}, {queryParamsHandling: 'preserve')
        
        *Router does NOT account for current path when using relative path notation; if you use relative paths, must specify {relativeTo: path}, by default relativeTo is root route


PASSING ROUTE PARAMS:
*dynamic routes are designated in route registration with ":<segment>'
*retreive with:
     this.activatedRoute.snapshot.params['<segmentname>']
     this.activatedRoute.snapshot.fragment;
     this.activatedRoute.snapshot.queryParams;
*N: snapshot will not react to changes, sends a copy
*change params from string to number, add "+" in front of expression

*to update currently LOADED route with new data from acquired as route params, use observable "params". "fragment" or "queryParams" method of ActivatedRoute; below will execute when route params change
    EX:in ngOninit> this.acitvatedRoute.params.subscribe(
        (params:Params) => {this.user.id = params['id'];}
    )
    * .subscribe takes functionsthat are passed as arguments
    SX: this.activatedRoute.params.subscribe(
        (property: type of trigger) => {expressions as js object}
    )
*[]

PASSING DATA THROUGH ROUTE OBJECTS:

DATA: passing static data through route object
*add 'data' property to route objects as key:value pairs
    SX: data{key:"some value to pass"}
*retreive using ActivatedRoute.snapshopt.data.['key'] or observable version without 
'.snapshot' chain  
    SX:this.AcivatedRoute.data.subscribe(
        (data:Data) => {this.componentProperty = data['key']}
    )
O: Data; (@angular/router)




RESOLVER: passing dynamic data through route object
*A service that is added into route object and is resolved prior to the component loading 
    SX: resolve:{<property>: ResolveService}
*data returned by the service is stored into and retrieved out of the route object through the onit method in the rendered component through data property
    SX: this.ActivatedRoute.data.subscribe(
        (data:Data) +> {this.compProterty = data['<property>']}
    )
*can define another interface to represent the <property> to be passed as an object
*implements Resolve interface
I: Resolve<T>; @angular/router -->requires method 'resolve that takes snapshots below
O: AcivatedRouteSnapShot --> route; @angular/router 
O: RouterStateSnapshot --> state @angular/router



GUARDS:

OBSERVABLES:
*Observable defines data, errors and complete code to emit to observers(subscribers) -- 
*Observers call .subscribe() on the observable, which takes 3 args which specify that it will receive data (.next), errors (.error), completes (.complete)
*subscriptions to observables do not get destroyed when component is destroyed
*Manually add with 'Subscription' from 'rxjs'; then implement an OnDestroy lifecycle hook and ngOnDestroy, add an expression to .unsubscribe()
I: OnDestroy : lifecycle hook that implements method ngOnDestroy()

O: Subscription (from rxjs) : type that allows observable methods
    .subscribe .unsubscribe

    SUBJECTS: once instantiated in service, can then be used in producer to set the data emitted, and in the consumer call .subscribe on the property.
    *much the same syntax as eventemitter and .emit then .subscribe -- just init new Subject() in service, and in producer:  
        service.property.next(data);
    and in consumer comp:
        service.property.subscribe( data => {code to process});

======================================
FORMS 
======================================
+++++++++++++++++++++++++++++++++++++++
TEMPLATE APPROACH

-------------------------------------------------
    QUICKSTART:
    import > FormsModule
    register input controls > ngModel name="<name>"
    form tag > (ngSubmit)="onSubmit(formRef)" #formRef="ngForm"
    comp.ts > onSubmit(formRef: NgForm) {
        access/process form inputs code block
    }

    ALT:*remove ngSubmit listener/onSubmit method -- use propertyName below to access the NgForm object
    comp.ts > @ViewChild('formRef') <propertyName>: NgForm
    
--------------------------------------------------
M: FormsModule (@angular/forms) and add in app.module imports array
D: ngModel: register input controls by adding directive and name=""; angular recognizs as control and adds properties/css classes that reflect STATE. Angular adds css classes to reflect STATE and ng-reflect-model directive to tag.
O: NgForm: object created by angular containing the STATE of the form including input values (NgForm.value) property values (eg dirty, touched, valid, disabled)
    SX: #formRef="ngForm" (ngSubmit)="onSubmit(formRef)" 
        *add to form tag; the listener will work with form's submit button.
        *SUBMIT: ref to NgForm object is passed to method in component class and used to query property values.
            SX: onSubmit(formRef: NgForm){
            formRef.value.name;
            }
    NgForm PROPERTIES TO CSS: ng properties that are TRUE are added as css classes in html tags and can be used to add STATE specific styling
        SX: ng-pristine/ng-dirty  --> has something been entered
            ng-touched/ng-untouched  --> has cursor moved into then out of field
            ng-valid/ng-invalid --> are entries valid
        EX: in CSS file:
            input.ng-invalid.ng-touched{ border: red solid 1px} 
    SET NgForm PROPERTIES DYNAMICALLY: (see button tag)
        EX: [disabled]="formRef.invalid"

VALIDATION: add VALIDATOR directives to html tags to check for valid/invalid state       SX: required email 
        minlength/maxlength = "number"  --> (see password input tag)
        pattern="[a-zA-Z ]*"
        requiredtrue  -->used for checkboxes
    *SHOW FLASH MSGS: (at control level) add #localRef="ngModel" to the control tag,add a message wrapped in span tag with structural directive to show message when desired properties are true/false  (EX: see password input)
    SX: *ngIf="localRef.invalid && localRef.touched" 
      

DEFAULT VALUES:  [ngModel]="defaultValueProperty" (one-way property binding)
    *use one-way binding to display default value originating from class property
    *SELECT TAGS: can use the class property set to the value of one of the options
        (EX: see select tag in form component)

GROUPING TAGS: 
D: ngModelGroup='<groupName>' add to div/container tag to group and next all tags inside;
    *To reference the group also add #localRef="ngModelGroup" and gain access to ngModelGroup object

SETTING/PATCHING FORM VALUES INTO A FORM:
    *SET: sets ALL values; use a localRef and @ViewChild('localRef) <property>: NgForm to access NgForm object, THEN use  <property>.setValue({JS object of key value pairs to set})
    *PATCH: sets only specified values; same @ViewChild() access as above, then use <property>.form.patchValue({JS obbject of key: value pairs to set})

+++++++++++++++++++++++++++++++++++++++++++++++++++++
REACTIVE APPROACH

app.Module -->import ReactiveFormsModule and add to imports
app.component --> declare property of type FormGroup
app.component>onInit() --> create schemea by init a new FormGroup object and adding property:new FormControl() pairs
HTML FORM tag --> add [formGroup]="formName" and (ngSubmit)="onSubmit()"; add a button of type submit


*by creating the schema object, don't need to pass refs to elements
M: ReactiveFormsModule(@angular/forms), add in imports in app.module
O: FormGroup -- object that holds all form controls; declare a field of this type then init a new FormGroup in ngOnInit(); 
    *.get('property or path'): use FormGroup name with .get() to access form values and properties
D: [formGroup]="<formname>" --> add to form tag to bind to FormGroup object declared in component.ts
    *NESTING FORM GROUPS: nest the new FormGroup object in the component object schema; then in html build a container div to hold the crontrols and add formGroup directive 
        D: formGroupName="<nestedGroupName>", THEN in parsing object properties use
        <nestedGroupName.controlname> to refer to control.

O: FormControl -- each control in a form group; pass into FormGroup Ctor as key:value pairs( key: is the propery name that binds to formControlName directive in HTML and value: is a new FormControl object)
    SX: this.<formname>= new FormGroup({
        'username': new FormControl(defaultValue, [Validator.property,...]),
        '<controlname>': new FormControl(null)
    })
D: formControlName="<controlname> --> add to each tag to bind to FormComponent in FormGroup object declared in component.ts

O: FormArray([]) --> binds formControls to an array; holds a collection of form controls's data
    SX: 'addresses' : new FormArray([new FormControl()])
    *ACCESS: must cast .get() method to access or modify array; put parens around cast object then appent .push method
    SX: (<FormArray>this.<formName>.get('<arrayName>')).push(new FormControl(null, Validators))

D: formArrayName="<arrayName>": add to html container(div) holding formcontrols
DYNAMMICALLY ADDING FORM CONTROLS TO FormArray:
    *button should be of type button so that it does not submit the form and have click listener
    *clicking the button just adds the control to the array that HAS a value to the array.


M: (ngSubmit)="onSubmit()" --> add to form tag to tie in submit button; then create onSubmit method in component.ts

VALIDATION: 
O: Validator --> add as 2nd argument in FormControl initialization
*FLASH MESSAGE: add a span and add use FormControl object with .get method to get the state of desired properties
    SX: *ngIf="<formName>.get('<controlname>').invalid && <formName>.get(<controlname>).touched"


