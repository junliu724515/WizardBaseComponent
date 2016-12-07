({
    // Your renderer method overrides go here
    rerender : function(cmp, helper){
        debugger
        this.superRerender();
        // do custom rerendering here
        cmp.find("wizardProcess").setStep(0);
    }
})