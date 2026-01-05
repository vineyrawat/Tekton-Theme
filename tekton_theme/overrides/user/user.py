import frappe

@frappe.whitelist()
def switch_theme(theme):
	print(theme)	
	if theme in ["Dark", "Light", "Automatic", "Tekton-blue", "Propstar-red","Propstar-theme","Propstar-green","Gradient-theme"]:
		frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)