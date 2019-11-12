# db-interchanges-rest

A public HTTP REST API, exposing the [db-interchanges](https://github.com/juliuste/db-interchanges.) JavaScript module, which can be used to retrieve accessibility information for interchanges between specific platforms at Deutsche Bahn (DB) stations. **See the [module's readme page](https://github.com/juliuste/db-interchanges) for coverage and usage information.**

The public endpoint is available at `https://1.db-interchanges.juliustens.eu`.

[![license](https://img.shields.io/github/license/juliuste/db-interchanges-rest.svg?style=flat)](LICENSE)

## `GET /`

Output from [`db-interchanges`](https://github.com/juliuste/db-interchanges), see the module's readme page for detailed explanations of all responses.

- `fromStationId`: **Required.** DB station id (e.g. `8012478` for Leipzig Messe)
- `fromPlatform`: **Required.** Platform name (e.g. `2`)
- `toStationId`: **Required.** DB station id (e.g. `8012478` for Leipzig Messe)
- `toPlatform`: **Required.** Platform name (e.g. `3`)
- `fastaToken`: *Optional, but usage encouraged*. Token for the DB FaSta elevator api. The APi uses a default token, but this is likely to be rate-limited if used by a lot of people. You can get your own one [here](https://developer.deutschebahn.com/store/apis/info?name=FaSta-Station_Facilities_Status&version=v2&provider=DBOpenData).

```shell
curl 'https://1.db-interchanges.juliustens.eu/?fromStationId=8012478&fromPlatform=2&toStationId=8012478&toPlatform=3'
```

### Example response

```js
{
	barrierFree: true,
	elevators: [
		'10068718',
		'10200698'
	]
}
```

## See also

- **[db-interchanges](https://github.com/juliuste/db-interchanges)** - Library exposed by this API.
- **[db-platforms](https://github.com/juliuste/db-platforms)** - Deutsche Bahn platform information, enriched with OSM data.
- **[db-elevators](https://github.com/juliuste/db-elevators)** - Deutsche Bahn elevator information, enriched with OSM data.

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/db-interchanges-rest/issues).
