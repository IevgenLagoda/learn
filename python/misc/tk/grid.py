import tkinter 
import tkinter.ttk

class Application(tkinter.ttk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.pack(fill="both",  padx=4,  pady=4) 
        self.create_widgets() 
        self.master.title("Grid") 
        self.master.resizable(True,  False)
    
    def create_widgets(self):
        entValue = tkinter.ttk.Entry(self) 
        entValue.grid(sticky="w,  e")
        btnShow = tkinter.ttk.Button(self,  text="Get value") 
        btnShow.grid(row=0,  column=1,  sticky="w,  e")
        btnExit = tkinter.ttk.Button(self,  text="Exit") 
        btnExit.grid(column=1,  sticky="e,  s")
        self.grid_rowconfigure(1,  pad=5)
        self.grid_columnconfigure(0,  minsize=100,  weight=2,  pad=5) 
        self.grid_columnconfigure(1,  weight=1,  pad=5)

root = tkinter.Tk()
app = Application(master=root)
root.mainloop()