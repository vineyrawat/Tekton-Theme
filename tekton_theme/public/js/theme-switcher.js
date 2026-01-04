frappe.provide("frappe.ui");

frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super()
    }

    fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "light",
					label:("Frappe Light"),
					info:("Light Theme"),
				},
				{
					name: "dark",
					label:"Timeless Night",
					info:"Dark Theme",
				},
				{
					name: "automatic",
					label:"Automatic",
					info:"Uses system's theme to switch between light and dark mode",
				},
                {
                    name:"tekton-blue",
                    label: "Tekton-Blue",
                    info: "Tekton Blue"
                },
				{
                    name:"propstar-red",
                    label: "PropStar-Red",
                    info: "PropStar Red"
                },
				{
                    name:"propstar-theme",
                    label: "PropStar Theme",
                    info: "PropStar Theme"
                },
				{
					name:"gradient-theme",
					label: "Gradient Theme",
					info: "Gradient Theme"
				}
			];

			resolve(this.themes);
		});
	}
}