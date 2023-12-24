# myscript.py

def add_numbers(a, b):
    return a + b

def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    # Test the functions
    result = add_numbers(5, 7)
    print(f"Result of adding numbers: {result}")

    greeting = greet("John")
    print(greeting)
