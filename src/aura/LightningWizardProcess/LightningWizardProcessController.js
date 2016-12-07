({
    
    doSetStep : function(component, event, helper) {
        
        // debugger;
        var currentStep = component.get('v.currentStep');
        var params = event.getParam('arguments');
        var newStep = params[0];
        
        //hide old step
        var oldStepComp = component.get('v.body')[currentStep];
        $A.util.addClass(oldStepComp,"slds-hide");
        
        //show new step
        var newStepComp = component.get('v.body')[newStep];
        $A.util.removeClass(newStepComp,"slds-hide");

        //set current step
        component.set('v.currentStep',newStep);
        helper.showProgress(component);
        helper.hideSpinner(component);
        //if it is the last step dynmacially create the finish button
        if (helper.isFinalStep(component,newStep)) {       
            helper.createFinishButton(component);
        }
        
    },
    
    next : function(component, event, helper) {
        
        var nextStep = component.get("v.currentStep")+1;  
        var newStepEvent = component.getEvent("newStepEvent");
        
        helper.showSpinner(component);
        
        newStepEvent.setParam("newStep", nextStep);  
        newStepEvent.fire();      
    },
    
    previous : function(component, event, helper) {
        var previousStep = component.get("v.currentStep")-1;
        var newStepEvent = component.getEvent("newStepEvent");
        if (previousStep>=0){
            newStepEvent.setParam("newStep", previousStep );
            newStepEvent.fire();
        }  
    },
    
    cancel : function(component, event, helper) {
        component.getEvent("cancelEvent").fire();   
    },
    
    finish : function(component, event, helper) {
        component.getEvent("finishEvent").fire(); 
    },
    
    doInit : function(component, event, helper) {
        //  debugger;
        helper.showProgress(component);
        component.setStep(component.get('v.currentStep'));
        helper.createWizardNavigationButtons(component);
    }
    
})