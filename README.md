# WizardBaseComponent

A Base lightning component for Wizard using LDS

Demo: http://bit.ly/2g8iJFM

Attributes:
   steps -- the string array to define multiple steps

Events:
   newStepEvent -- move the steps in Wizard
   cancelEvent -- event emitted when wizard being cancelled
   finishEvent -- event emitted when wizard being finished


Usage: using four steps as the example( see more in LightingWizardProcessTestApp in the repo)

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
