import tkinter
import tkinter.ttk
import tkinter.messagebox

class Application(tkinter.ttk.Frame):
    def __init__(self, master = None):
        super().__init__(master)
        self.master.title('Test')
        self.master.resizable(False, False)
        
        self.create_widgets()
        self.pack(padx=10, pady=10, ipadx=10)
        

    def create_widgets(self):
        self.userNameValue = tkinter.StringVar()
        self.userNameValue.set('User')
        self.inputValue = tkinter.ttk.Entry(self, textvariable=self.userNameValue)
        self.inputValue.pack()

        self.isAdminValue = tkinter.IntVar()
        self.isAdminValue.set(0)
        self.isAdminChecbox = tkinter.ttk.Checkbutton(self, text='Are you admin?', variable=self.isAdminValue)
        self.isAdminChecbox.pack()

        self.btnHello = tkinter.ttk.Button(self, text='Say hello')
        self.btnHello.bind('<ButtonRelease>', self.say_hello)
        self.btnHello.pack(side='left')

        self.btnShow = tkinter.ttk.Button(self)
        self.btnShow['text'] = 'Exit'
        self.btnShow['command'] = root.destroy
        self.btnShow.pack(side='bottom')

    def say_hello(self, evt):
        name = self.userNameValue.get()
        tkinter.messagebox.showinfo('Test', f'Hello {name}!')

root = tkinter.Tk()
app = Application(master=root)
root.mainloop()

