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
                    label: "Propstar-Red",
                    info: "Propstar Red"
                },
				{
                    name:"propstar-green",
                    label: "Propstar-Green",
                    info: "Propstar Green"
                },
				{
                    name:"propstar-theme",
                    label: "Propstar Theme",
                    info: "Propstar Theme"
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