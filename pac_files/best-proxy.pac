function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 202.181.16.45:52929",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 170.80.50.66:8080",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 45.144.234.129:53681",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 202.178.120.30:1080",
        "SOCKS 121.169.46.116:1090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}