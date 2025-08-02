function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 210.79.142.73:8080",
        "SOCKS 188.132.165.33:3128",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 27.79.219.247:16000",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 42.117.243.65:16000",
        "SOCKS 47.238.67.238:1111",
        "SOCKS 27.79.251.193:16000",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 103.245.205.142:35158",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 45.77.99.40:8990",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}