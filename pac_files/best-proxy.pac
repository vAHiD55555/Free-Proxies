function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.62.186.244:1080",
        "SOCKS 144.91.82.211:9050",
        "SOCKS 150.230.194.118:555",
        "SOCKS 93.177.116.84:1080",
        "SOCKS 170.64.170.204:1080",
        "SOCKS 111.68.0.101:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 102.0.14.42:1080",
        "SOCKS 111.67.103.90:1080",
        "SOCKS 92.113.32.17:1081",
        "SOCKS 103.142.255.32:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 47.76.149.237:1011",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 68.183.60.51:1088",
        "SOCKS 165.227.211.170:9064",
        "SOCKS 94.159.106.252:1080",
        "SOCKS 135.125.154.99:8899",
        "SOCKS 212.193.3.103:1080",
        "SOCKS 223.25.110.37:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}