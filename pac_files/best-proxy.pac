function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.215.46.91:20087",
        "SOCKS 89.58.45.94:52639",
        "SOCKS 103.155.198.253:8006",
        "SOCKS 54.37.72.89:80",
        "SOCKS 43.133.37.149:1080",
        "SOCKS 103.164.214.122:8080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 64.227.109.21:9090",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 89.58.45.94:10036",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 40.192.82.81:3128",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 62.213.13.54:3128",
        "SOCKS 89.58.45.94:20709",
        "SOCKS 89.58.45.94:10443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}