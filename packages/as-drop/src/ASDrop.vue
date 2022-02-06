<template>
    <div class="drop-menu" :class="[absolute? 'menus-absolute':'']">
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
      >
        <ul v-if="show" class="menus">
          <li>
            <slot class="menu-item"></slot>
          </li>
        </ul>
      </transition>
    </div>
</template>

<script>
export default {
  name: "ASDrop",
  props: {
    absolute: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showOrHidden (props) {
      this.show = props
    },
    addClass(el, outerClassName) {
      if (!el) return;
      let currentClassName = el.className;
      let classes = (outerClassName || "").split(" ");

      for (let i=0, len=classes.length; i<len; i++) {
        let className = classes[i];
        if (!className) continue;

        if (el.classList) {
          el.classList.add(className);
        } else if (!hasClass(el, className)) {
          currentClassName += " " + className;
        }
      }
      if (!el.classList) {
        el.className = currentClassName;
      }
    },
    removeClass(el, outerClassName) {
      if (!el || !outerClassName) return;
      let classes = outerClassName.split(" ");
      let currentClassName = " " + el.className + " ";

      for (let i=0, len=classes.length; i<len; i++) {
        let className = classes[i];
        if (!className) continue;

        if (el.classList) {
          el.classList.remove(className);
        } else if (hasClass(el, className)) {
          currentClassName = currentClassName.replace(" " + className + " ", " ");
        }
      }
      if (!el.classList) {
        el.className = trim(currentClassName);
      }
    },
    beforeEnter(el) {
      this.addClass(el, "collapse-transition");
      el.style.height = "0";
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
      } else {
        el.style.height = "";
      }
      el.style.overflow = "hidden";
    },

    afterEnter(el) {
      this.removeClass(el, "collapse-transition");
      el.style.height = "";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        this.addClass(el, "collapse-transition");
        el.style.height = 0;
      }
    },
    afterLeave(el) {
      this.removeClass(el, "collapse-transition");
      el.style.height = "";
    },
  },
};
</script>

<style scoped>
.drop-menu {
  min-width: 5rem;
}
.menus-absolute {
  margin-top: 0.8rem;
  box-shadow: -0.1rem 0.1rem 0.4rem #e1e1e1;
  border-radius: 0.4rem;
  background-color: #fff;
  position: absolute;
  top: 2.5rem;
  right: 1.8rem;
  z-index: 9999999999;
}
.menus {
  margin: 0;
  padding: 0;
}
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
}
</style>