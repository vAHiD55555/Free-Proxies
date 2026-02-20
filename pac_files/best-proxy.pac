function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.113.73.102:3128",
        "SOCKS 123.54.197.21:23701",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 123.54.197.20:23033",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 104.248.59.38:80",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 42.115.72.194:1101",
        "SOCKS 123.54.197.24:21980",
        "SOCKS 42.115.72.194:1097",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 123.54.197.20:22197",
        "SOCKS 42.115.72.194:1114",
        "SOCKS 123.54.197.52:22366",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 18.141.177.23:80",
        "SOCKS 123.54.197.52:21761",
        "SOCKS 123.54.197.21:23692",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}