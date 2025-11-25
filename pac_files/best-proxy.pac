function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.4.192.62:7302",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 157.180.121.252:25099",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 67.43.228.251:12125",
        "SOCKS 117.74.65.207:443",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 57.128.188.167:9158",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 157.180.121.252:10353",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 157.180.121.252:46977",
        "SOCKS 171.238.88.111:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}