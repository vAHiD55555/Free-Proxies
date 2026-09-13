function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:17494",
        "SOCKS 45.74.31.50:13406",
        "SOCKS 213.148.6.12:7777",
        "SOCKS 45.74.31.30:35228",
        "SOCKS 45.74.31.30:8303",
        "SOCKS 45.74.31.30:10147",
        "SOCKS 45.74.31.30:8371",
        "SOCKS 45.74.31.30:4730",
        "SOCKS 45.74.31.30:6947",
        "SOCKS 45.74.31.30:5394",
        "SOCKS 45.74.31.30:9251",
        "SOCKS 45.74.31.42:20118",
        "SOCKS 195.46.183.181:1080",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 45.74.31.42:11037",
        "SOCKS 45.74.31.30:5810",
        "SOCKS 185.204.170.179:1113",
        "SOCKS 45.74.31.30:35098",
        "SOCKS 45.74.31.30:7835",
        "SOCKS 45.74.31.30:8687",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}