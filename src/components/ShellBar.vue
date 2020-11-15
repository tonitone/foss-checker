<template>
  <div>
    <fd-shell-bar>
      <fd-shell-bar-group position="start">
        <fd-shell-bar-logo
          alt="SAP"
          :src="$withBase('images/sap-logo@2x.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <fd-shell-bar-product productTitle="Product Name" />
      </fd-shell-bar-group>
      <fd-shell-bar-group position="end">
        <fd-shell-bar-actions>
          <fd-shell-bar-action>
            <fd-shell-bar-user-menu ref="userMenu">
              <fd-menu>
                <fd-menu-list>
                  <fd-menu-item @click="closeUserMenu">
                    Settings
                  </fd-menu-item>
                  <fd-menu-item @click="closeUserMenu">
                    Sign out
                  </fd-menu-item>
                </fd-menu-list>
              </fd-menu>
            </fd-shell-bar-user-menu>
          </fd-shell-bar-action>
        </fd-shell-bar-actions>
      </fd-shell-bar-group>
    </fd-shell-bar>
  </div>
</template>

<script>
export default {
  methods: {
    closeUserMenu() {
      this.$refs.userMenu.close();
    }
  },
  computed: {
    srcset() {
      return [
        `${this.$withBase("images/sap-logo@2x.png")} 2x`,
        `${this.$withBase("images/sap-logo@3x.png")} 3x`,
        `${this.$withBase("images/sap-logo@4x.png")} 4x`
      ].join(", ");
    }
  }
};
</script>

<style>
.fd-shell-header {
  font-family: "72", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  line-height: 1.42857;
  -webkit-font-smoothing: antialiased;
  color: var(--fd-color);
  font-size: 16px;
  box-sizing: inherit;
  background-color: var(--fd-color-shell-1);
  z-index: 1;
  width: 100%;
  height: 48px;
  position: fixed;
}
.fd-shellbar__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: middle;
  max-height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
}
.fd-shellbar__logo,
.fd-shellbar__product,
.fd-shellbar__subtitle {
  display: inline-block;
  vertical-align: middle;
}
.fd-shellbar {
  font-size: 14px;
  line-height: 1.42857;
  font-family: "72", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  height: 48px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 4px 32px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.fd-shellbar__group--end,
.fd-shellbar__group--start {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.fd-shellbar__group--start {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>