import subprocess

process = subprocess.Popen(
    ["sh", "shell.sh"], 
    stdin=subprocess.PIPE, 
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE, 
    text=True)

while process.returncode is None:
    output = process.stdout.readline()
    if output:
    	print(output.strip())
        
    if (output.startswith('Hello')):
        process.stdin.write("Eugene\n")
        process.stdin.flush()
    elif (output.startswith('Rusni')):
        process.stdin.write("yes\n")
        process.stdin.flush()    
    
    if output.startswith('I hope'):
            break
    
    