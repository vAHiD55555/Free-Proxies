function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.225.204.32:10800",
        "SOCKS 118.145.141.251:44078",
        "SOCKS 45.74.31.42:8011",
        "SOCKS 44.193.20.213:443",
        "SOCKS 202.74.203.17:1080",
        "SOCKS 5.128.225.252:1081",
        "SOCKS 118.145.141.251:44127",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 147.45.60.241:1082",
        "SOCKS 118.145.141.251:44208",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 79.137.198.159:42771",
        "SOCKS 45.74.31.42:8465",
        "SOCKS 45.74.31.30:6990",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 45.74.31.30:4109",
        "SOCKS 37.187.140.119:3080",
        "SOCKS 31.220.163.133:1080",
        "SOCKS 103.236.190.197:1080",
        "SOCKS 118.145.141.251:44055",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}