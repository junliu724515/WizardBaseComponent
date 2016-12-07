({
    newStep : function(component, event, helper) {
        var newStep = event.getParams().newStep; 
        component.find("wizardProcess").setStep(newStep);
    },
    
    cancel : function(component, event, helper) {
        //reset v.body to trigger rerender 
        //to reload the lightning app page
        //or you can reset the wizard component by calling
        //component method  setStep directly
        component.set("v.body", component.get("v.body"));
        
    },
    finish : function(component, event, helper) {
        alert("It's all done, and please refresh the page to try it again!");
    }
})