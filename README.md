# Przykłady z rozdziału 4. - Tworzenie aplikacji internetowych z użyciem Node i Express, Wydanie II

## Używanie modułów Node

Ten rozdział zawiera głównie informacje teoretyczne, a zatem zawiera tylko jeden przykład; przekształca "ciasteczko szczęścia" z rozdziału 3. i umieszcza je w module Node.  Patrz _lib/fortune.js_ i _meadowlark.js_.

### Konfiguracja

Przykład z tego rozdziału zawiera zależności od modułów Node (`express` i `express-handlebars`).  Te zależności są uwzględnione w pliku _package.json_.  Jednak po pobraniu tego kodu nie będą zainstalowane (_package.json_ jest tylko plikiem manifestu).  Aby je zainstalować, należy wykonać poniższe polecenie:

```
npm install
```

### Uruchamianie

Minimalny przykład; wykorzystuje Express, lecz ma ograniczone działanie.  Uruchamianie:

```
node 00-meadowlark
```

Następnie otwórz adres _http://localhost:3000/about_ w przeglądrce.
