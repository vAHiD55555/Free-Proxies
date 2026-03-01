function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.1.48.242:20076",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 146.235.19.84:10872",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 156.244.46.156:20002",
        "SOCKS 103.93.93.221:8181",
        "SOCKS 117.1.48.242:20017",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 147.45.60.34:1082",
        "SOCKS 159.65.230.91:20067",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 213.35.110.67:10809",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.113.70.189:1081",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 144.31.25.69:21064",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}