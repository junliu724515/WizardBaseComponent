({
    showProgress : function(component) {
        var currentStep = component.get("v.currentStep")+1;
        var progressBar = component.find("progressBar");
        var wlis = component.find("step");
        var stepSize = wlis.length;
        var i = 0;
        
        //highlight the finished steps 
        while (i<stepSize) {
            if (i<currentStep) {
                $A.util.addClass(wlis[i], "slds-is-active")
            }else {
                $A.util.removeClass(wlis[i], "slds-is-active")
            } 
            i++
        }
        
        //highlight the progress bar 
        component.set("v.progressPercentage", ((currentStep-1)/(stepSize-1))*100);
    },
    
    showSpinner : function(component) {  
        var spinner = component.find("spinner");
        $A.util.removeClass(spinner, "slds-hide");
    },
    
    hideSpinner : function(component) {
        var spinner = component.find("spinner");
        $A.util.addClass(spinner, "slds-hide");
    },
    
    isFinalStep : function(component, nextStep) {
      
        var steps = component.get("v.steps"); 
        if (nextStep==steps.length-1){
            return true;
        }
        return false;
    },
    
    createWizardNavigationButtons : function(component){
        $A.createComponents([
            ["lightning:button",{
                "variant" : "neutral",
                "label" : "Cancel",
                "onclick" : component.getReference("c.cancel")
            }],
            ["lightning:button",{
                "variant" : "neutral",
                "label" : "Previous",
                "onclick" : component.getReference("c.previous")
            }],
            ["lightning:button",{
                "variant" : "neutral",
                "label" : "Next",
                "onclick" : component.getReference("c.next")
            }]
        ],
                            function(components, status, errorMessage){
                                if (status === "SUCCESS") {
                                    component.set("v.buttons", components);
                                }
                                else if (status === "INCOMPLETE") {
                                    console.log("No response from server or client is offline.")
                                    // Show offline error
                                }
                                    else if (status === "ERROR") {
                                        console.log("Error: " + errorMessage);
                                        // Show error message
                                    }
                            }
                           );
    },
    
    createFinishButton : function(component) {
        $A.createComponent(
            "lightning:button",{
                "variant" : "neutral",
                "label" : "Finish",
                "onclick" : component.getReference("c.finish")
            },
            function(newButton, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    
                    component.set("v.buttons", newButton);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                    else if (status === "ERROR") {
                        console.log("Error: " + errorMessage);
                        // Show error message
                    }
            }
        );
        
    }
    
})