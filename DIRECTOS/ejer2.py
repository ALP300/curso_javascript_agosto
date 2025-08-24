'''
Escribir un programa que almacene 
las asignaturas de un curso 
(por ejemplo Matemáticas, Física, 
Química, Historia y Lengua) 
en una lista, pregunte al usuario
la nota que ha sacado en cada asignatura 
y elimine de la lista
las asignaturas aprobadas. Al final el 
programa debe mostrar 
por pantalla las asignaturas que el usuario
tiene que repetir.
'''

asignaturas=["Cálculo", "Economia", "Historia", "Base de Datos"]
cursosAprobados=[]
for asignatura in asignaturas:
    nota= float(input(f"Qué nota has sacado en {asignatura}?: "))
    if nota>=5:
        cursosAprobados.append(asignatura)
for asig in cursosAprobados:
    asignaturas.remove(asig)

print("Tienes que repetir "+ str(asignaturas))
    