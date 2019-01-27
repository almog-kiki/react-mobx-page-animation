import {  autorun , action, observable } from "mobx";

const ANIMATION_TYPE_ZOOM_IN            = "ZoomIn";
const ANIMATION_TYPE_SWIPE_TO_TOP       = "SwipeToTop";
const ANIMATION_TYPE_SWIPE_TO_BUTTOM    = "SwipeToBottom";
const ANIMATION_TYPE_SLIDE_IN           = "SlideIn";

class AnimationStore {
    @observable animations = [ANIMATION_TYPE_ZOOM_IN, ANIMATION_TYPE_SWIPE_TO_TOP,ANIMATION_TYPE_SWIPE_TO_BUTTOM,ANIMATION_TYPE_SLIDE_IN];
    @observable currentType = ANIMATION_TYPE_SWIPE_TO_TOP;
}

var store = window.store = new AnimationStore
export default new AnimationStore;

autorun(()=>{
    console.log("AnimationStore.currentType: " + store.currentType)
})