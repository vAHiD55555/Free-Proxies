function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.177.229.183:8080",
        "SOCKS 139.177.229.90:8080",
        "SOCKS 213.76.184.53:3128",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 139.177.229.32:8080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 139.177.229.178:8080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 139.177.229.89:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}