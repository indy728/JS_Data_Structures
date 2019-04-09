import string
import random

menu = ("1: Print List\n"
        "2: Add To Head\n"
        "3: Add To Tail\n"
        "4: Remove From Head\n"
        "5: Remove From Tail\n"
        "6: Find Index of Value\n"
        "7: Remove Node of Value\n"
        "0: Exit\n")

def switch_menu(argument, listHead): 
    switcher = { 
        0: "break",
        1: listHead.addToHead(random.randint(0,10000)),
        2: print("test")
    } 
    return switcher.get(argument, "nothing") 

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def addToHead(self, value=None):
        newNode = Node(value, self.head)
        if self.head is not None:
            self.head.prev = newNode
        else:
            self.tail = newNode
        self.head = newNode
        print(f"New node of value {value} added to the head of the list\n")
    
    def addToTail(self, value=None):
        newNode = Node(value, None, self.tail)
        if self.tail is not None:
            self.tail.next = newNode
        else:
            self.head = newNode
        self.tail = newNode
        print(f"New node of value {value} added to the tail of the list\n")

    def removeHead(self):
        if self.head is None:
            return None
        head = self.head
        self.head = head.next
        if self.head is not None:
            self.head.prev = None
        else:
            self.tail = None
        return head.value
            
    def removeTail(self):
        if self.tail is None:
            return None
        tail = self.tail
        self.tail = tail.prev
        if self.tail is not None:
            self.tail.next = None
        else:
            self.head = None
        return tail.value

    def searchValue(self, value=None):
        if self.head is not None:
            node = self.head 
        else:
             return None
        while node is not None:
            if node.value is value:
                return node
            node = node.next
        return None

    def removeNode(self, node=None):
        if node is not None:
            if node is self.head:
                return self.removeHead
            elif node is self.tail:
                return self.removeTail
            else:
                node.prev.next = node.next
                node.next.prev = node.prev
                return node.value
        return None

    def indexOf(self, value=None):
        if self.head is not None:
            node = self.head 
        else:
             return None
        index = 0
        while node is not None:
            if node.value is value:
                return index
            node = node.next
            index += 1
        return None

    def printList(self):
        node = self.head
        while node is not None:
            print(node.value)
            node = node.next


class Node:
    def __init__(self, value=None, next=None, prev=None):
        self.value = value
        self.next = next
        self.prev = prev

def start():
    myList = LinkedList()
    while True:
        selection = input(f"\n{menu}\n\nPlease select an option: ")
        if selection == "0":
            break
        elif selection == "1":
            myList.printList()
        elif selection == "2":
            myList.addToHead(random.randint(0,10000))
        elif selection == "3":
            myList.addToTail(random.randint(0,10000))
        elif selection == "4":
            myList.removeHead()
        elif selection == "5":
            myList.removeTail()
        elif selection == "6":
            value = int(input("Please enter the value you would like to find an index for: "))
            index = myList.indexOf(value)
            if index is not None:
                print(f'The index of {value} is {index}')
            else:
                print(f"The value {value} does not exist in the list")
        elif selection == "7":
            value = int(input("Please enter the value you would like to remove from the list: "))
            myList.removeNode(myList.searchValue(value))

start()