function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 200.59.191.232:999",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 115.127.182.138:2589",
        "SOCKS 115.127.119.252:1080",
        "SOCKS 194.33.111.254:8080",
        "SOCKS 164.163.42.2:10000",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 62.133.63.236:1111",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.54.217.82:8199",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 164.163.40.1:10000",
        "SOCKS 113.192.12.102:8080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 5.75.235.252:27021",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}