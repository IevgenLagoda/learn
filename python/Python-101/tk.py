import tkinter as tk

class App:
    def __init__(self, parent):
        frame = tk.Frame(parent)
        frame.pack()

        btn22 = tk.Button(frame, text="22", command=lambda: self.printNum(22))
        btn22.pack(side=tk.LEFT)
        btn44 = tk.Button(frame, text="44", command=lambda: self.printNum(44))
        btn44.pack(side=tk.LEFT)
        quitBtn = tk.Button(frame, text="Exit", fg="red", command=frame.quit)
        quitBtn.pack(side=tk.LEFT)
    
    def printNum(self, num):
        print("Pressed button %s" % num)
    
root = tk.Tk()
app = App(root)
root.mainloop()
        