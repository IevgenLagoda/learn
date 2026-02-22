import tkinter 
import tkinter.ttk

class Application(tkinter.ttk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.configure(width=200,  height=100) 
        self.pack(padx=4,  pady=4)
        self.create_widgets()
        self.master.title("Place")
        self.master.resizable(False,  False)
    
    def create_widgets(self):
        entValue = tkinter.ttk.Entry(self)
        entValue.place(x=4,  y=4,  width=-8,  relwidth=1.0,  height=22)
        btnShow = tkinter.ttk.Button(self,  text="Get value") 
        btnShow.place(x=4,  y=30,  width=-8,  relwidth=1.0,  height=26)
        btnExit = tkinter.ttk.Button(self,  text="Exit") 
        btnExit.place(x=-64,  relx=1.0,  y=-30,  rely=1.0, width=60,  height=26)

root = tkinter.Tk()
app = Application(master=root)
root.mainloop()
