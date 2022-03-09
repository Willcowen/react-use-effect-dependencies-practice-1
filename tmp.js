useEffect(() => {
    fetch(`https://swapi.dev/api/${dataType}/`)
      .then(res => res.json())
      .then(json => {
        setPeople(json.results)
    })
  }, [searchQuery] ) 