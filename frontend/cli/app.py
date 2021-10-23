import requests
from flask import Flask

app = Flask(__name__)




def register(sale):
  URL = (f"http://172.17.0.2:3000/sales/")
  return requests.post(URL, json=sale)

def retriveSellers():
  URL = (f"http://172.17.0.2:3000/sellers/values-list/")
  return requests.get(URL)


   
def cli_menu():
  print('\n\nOla, consigo te ajudar nos seguintes itens:\n\n1. Registrar uma nova venda\n2. Ver lista de melhores vendedores')

def cli_make_sale():
  print("Vamos registrar uma venda!")
  sellerName = str(input(f"\nDigite o nome do vendedor: "))
  print("Ok!")
  customerName = str(input(f"\nAgora o nome do cliente: "))
  print("Ok!")
  dateOFSale = str(input(f"\nQual a data de venda?\n"))
  print("Ok!")
  saleItemName = str(input(f"\nE o item vendido foi?\n"))
  print("Ok!")
  saleValue = str(input(f"\nPara finalizar, me diga o valor da venda: "))
  
  sale = {
    "sellerName"   : sellerName,
    "customerName" : customerName,
    "dateOfSale"   : dateOFSale,
    "saleItemName" : saleItemName,
    "saleValue"    : saleValue
  }

  resp = register(sale)
  if(resp.status_code == 201):
    print("Venda registrada!")
  else:
    print(resp.json()['reason'])

  cli()

def cli_show_best_sellers():
  list = retriveSellers().json()
  print("\nSegue a lista dos melhores vendedores!")
  print("Ordenado pelo somatorio em vendas\n\n")
  for seller in list:
    print(f"Vendedor: {seller['sellerName']} - Acumulado em vendas: {seller['SumOfSales']}")
  cli()

def cli():
  cli_menu()
  user_input = int(input(f"\nDigite a opcao desejada: ")) 
  options = {
    1 : cli_make_sale,
    2 : cli_show_best_sellers
  }
  options[user_input]()    

if __name__ == '__main__':
  cli()
  