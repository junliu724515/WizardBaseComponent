<aura:application extends="force:slds" template="c:MyAppTemplate" >
   
    <!--wizard component-->
    <div class="slds-m-top--large slds-p-around--medium" >
        <c:LightningWizardProcess aura:id="wizardProcess" 
                                  steps="Step1, Step2, Step3, Step4" 
                                  newStepEvent="{!c.newStep}"
                                  cancelEvent="{!c.cancel}"
                                  finishEvent="{!c.finish}">
            <!--page1-->
            <div class="slds-hide">
                Step 1 content
                <!--replace it with the your page content or another components-->
            </div>
            <!--page2-->
            <div class="slds-hide">
                Step 2 content
                <!--replace it with the your page content or another components-->
            </div>
            <!--page3-->
            <div class="slds-hide">
                Step 3 content
                <!--replace it with the your page content or another components-->                
            </div>
            <!--page4-->
            <div class="slds-hide">
                Step 4 content
                <!--replace it with the your page content or another components-->
            </div>
            
        </c:LightningWizardProcess>
    </div>
    
</aura:application>