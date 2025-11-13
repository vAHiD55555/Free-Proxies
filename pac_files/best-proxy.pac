function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.92:57114",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 152.53.36.101:44695",
        "SOCKS 152.53.36.101:25099",
        "SOCKS 170.82.236.150:8080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 74.48.187.162:3128",
        "SOCKS 89.58.45.94:28231",
        "SOCKS 152.53.36.101:43949",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 166.249.54.61:7234",
        "SOCKS 111.61.73.175:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}