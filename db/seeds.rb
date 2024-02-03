# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
Greeting.create(language: 'Amharic', phrase: 'ሰላም!')
Greeting.create(language: 'Swahili', phrase: 'Habari!')
Greeting.create(language: 'Zulu', phrase: 'Sawubona!')
Greeting.create(language: 'Hausa', phrase: 'Sannu!')
Greeting.create(language: 'Somali', phrase: 'Salaam aleikum!')
Greeting.create(language: 'Kinyarwanda', phrase: 'Muraho!')
Greeting.create(language: 'Spanish', phrase: '¡Hola!')
Greeting.create(language: 'German', phrase: 'Hallo!')
Greeting.create(language: 'Portuguese', phrase: 'Olá!')
Greeting.create(language: 'Russian', phrase: 'Привет!')
