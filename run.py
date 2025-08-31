#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Archivo de inicio para la aplicación web
Ejecuta: python run.py
"""

from app import app, inicializar_base_datos

if __name__ == '__main__':
    print("🚀 INICIANDO SISTEMA DE GESTIÓN MIS ÁNGELES")
    print("=" * 50)
    
    # Inicializar base de datos
    inicializar_base_datos()
    print("✅ Base de datos inicializada")
    
    # Iniciar aplicación
    print("🌐 Iniciando servidor web...")
    print("📱 Accede a: http://localhost:5000")
    print("💻 Para detener: Ctrl+C")
    print("=" * 50)
    
    app.run(debug=True, host='0.0.0.0', port=5000)
