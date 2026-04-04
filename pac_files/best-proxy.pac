function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.213.151.128:3128",
        "SOCKS 177.234.217.88:999",
        "SOCKS 133.18.110.87:1081",
        "SOCKS 150.249.255.91:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 119.148.55.91:9108",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 38.34.179.154:8453",
        "SOCKS 45.136.130.187:8449",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 206.123.156.185:5634",
        "SOCKS 206.123.156.202:7156",
        "SOCKS 38.34.179.12:8452",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 206.123.156.221:4840",
        "SOCKS 45.136.131.63:8449",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 156.244.33.216:20002",
        "SOCKS 202.62.55.95:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}